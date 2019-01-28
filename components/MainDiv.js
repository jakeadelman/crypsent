import React from "react";
import { getTweets, sortTimes } from "../functions/fetchFunctions";
import TableCells from "./TableCells";
import "../mainDiv.css";

const fetch = require("node-fetch");
const dateformat = require("dateformat");
dateformat.masks.secondTime = "yymmddHHMMss";
dateformat.masks.myTime = "mmm dd h:MM TT";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ searchTerm: this.props.searchterm, by: this.props.by });

    if (!this.state.tweets[0] && this.props.by == "top") {
      let string = "http://localhost:4005/top/" + this.props.searchterm;
      fetch(string)
        .then(r => r.json())
        .then(body => {
          let arr0 = [];
          let startVal = 0;
          body.map(r => {
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            startVal += r.polarity;
            arr0.push(r);
          });
          let endVal = startVal / 50;
          endVal = endVal / 4;
          arr0.sort(sortTimes);
          this.setState({
            tweets: arr0,
            totalPolarity: endVal,
            loading: false
          });
        });
    } else if (!this.state.tweets[0] && this.props.by == "latest") {
      let string = "http://localhost:4005/latest/" + this.props.searchterm;
      fetch(string)
        .then(r => r.json())
        .then(body => {
          let arr0 = [];
          let startVal = 0;
          body.map(r => {
            startVal += r.polarity;
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          let endVal = startVal / 50;
          endVal = endVal / 4;
          arr0.sort(sortTimes);
          this.setState({
            tweets: arr0,
            totalPolarity: endVal,
            loading: false
          });
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.by !== nextProps.by) {
      let string =
        "http://localhost:4005/" + nextProps.by + "/" + this.state.searchTerm;
      console.log(string);
      let arr0 = [];
      fetch(string)
        .then(r => r.json())
        .then(body => {
          let startVal = 0;
          body.map(r => {
            startVal += r.polarity;
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          let endVal = startVal / 50;
          endVal = endVal / 4;
          arr0.sort(sortTimes);
          console.log(arr0);
          this.setState({
            tweets: arr0,
            by: nextProps.by,
            totalPolarity: endVal,
            loading: false
          });
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.loading == true ? (
          <div className="container">
            <div className="loader">
              <div className="circle">&nbsp;</div>
              <div className="circle">&nbsp;</div>
              <div className="circle">&nbsp;</div>
              <div className="circle">&nbsp;</div>
            </div>
          </div>
        ) : (
          <div>
            <p>{this.state.totalPolarity}</p>
            <table>
              <tr>
                <th>Timestamp</th>
                <th>Tweet</th>
                <th>Retweet Count</th>
                <th>Screen Name</th>
              </tr>

              {this.state.tweets[0]
                ? this.state.tweets.map((r, i) => (
                    <TableCells
                      key={i}
                      id={i}
                      text={r.text}
                      tweetId={r.tweetId}
                      timestamp={dateformat(r.timestamp, "myTime")}
                      polarity={r.polarity}
                      searchTerm={r.searchTerm}
                      isReplyTo={r.isReplyTo}
                      isRetweet={r.isRetweet}
                      screenName={r.screenName}
                      retweetCount={r.retweetCount}
                      favoriteCount={r.favoriteCount}
                      replyCount={r.replyCount}
                    />
                  ))
                : null}

              <style jsx>{`
                .table-header {
                  padding: 20px;
                }
                .table-header-cells {
                  border: 1px solid rgba(157, 181, 178, 0.5);
                  padding: 0.2em 1em 0.2em 1em;

                  text-align: center;
                }
              `}</style>
            </table>
          </div>
        )}
      </div>
    );
  }
}
