import { Image } from "antd";
import Title from "antd/lib/typography/Title";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Topsong extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: "30px",
          paddingLeft: "30px",
        }}
      >
        <div>
          <Title level={5}>2020 HITS!!</Title>
          <Title level={3}>Song of the year</Title>
        </div>
        <div className="topsongs">
          <div>
            <Link to="/top/tamil">
              <div className="r1">
                <div>
                  <Image
                    className="Image"
                    preview={false}
                    src="https://wallpaperaccess.com/full/2374217.png"
                    alt="Top tamil songs"
                  />
                </div>
                <div>
                  <Title level={5}>Top Tamil songs 2020</Title>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/top/english">
              <div className="r1">
                <div>
                  <Image
                    className="Image"
                    preview={false}
                    src="https://wallpaperaccess.com/full/2374217.png"
                    alt="Top English songs"
                  />
                </div>
                <div>
                  <Title level={5}>Top English songs 2020</Title>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/top/2020songs">
              <div className="r1">
                <div>
                  <Image
                    className="Image"
                    preview={false}
                    src="https://wallpaperaccess.com/full/2374217.png"
                    alt="Top 2020 songs"
                  />
                </div>
                <div>
                  <Title level={5}>Top Songs of 2020</Title>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/top/metalsong">
              <div className="r1">
                <div>
                  <Image
                    className="Image"
                    preview={false}
                    src="https://wallpaperaccess.com/full/2374217.png"
                    alt="Top metal songs"
                  />
                </div>
                <div>
                  <Title level={5}>Top Metal songs of 2020</Title>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/top/jazzsong">
              <div className="r1">
                <div>
                  <Image
                    className="Image"
                    preview={false}
                    src="https://wallpaperaccess.com/full/2374217.png"
                    alt="Top Jazz songs"
                  />
                </div>
                <div>
                  <Title level={5}>Top Jazz songs of 2020</Title>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Topsong;
