import React, {
  Component,
  PropTypes
} from 'react';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      data : [],
      ready: false
    };

    this._fetchBlog();
  }

  _initCss() {
    return {
      blogImg: {
        maxHeight: '300px'
      },
      cardTitle: {
        width     : '100%',
        padding   : '10px 20px',
        background: 'rgba(0,0,0,.5)'
      }
    };
  }

  _fetchBlog() {
    const uri = 'http://blog.about-hiroppy.org/rss/';

    $.ajax({
      url     : uri,
      dataType: 'xml'
    }).done((res) => {
      const arr   = [];
      const imgRe = /https?:[\w/:%#\$&\?\(\)~\.=\+\-]+(png|jpg|svg)/;
      const feeds = res.getElementsByTagName('item');

      [].forEach.call(feeds, (item) => {
        const imgUrl = item.getElementsByTagName('encoded')[0].textContent.match(imgRe) === null ?
          'https://pbs.twimg.com/profile_images/459921170251264000/ax4FMwXA_400x400.jpeg' :
          item.getElementsByTagName('encoded')[0].textContent.match(imgRe)[0];

        arr.push({
          img  : imgUrl,
          link : item.getElementsByTagName('link')[0].textContent,
          title: item.getElementsByTagName('title')[0].textContent
        });
      });

      this.setState({data: arr});
      setTimeout(() => {
        this.setState({ready: true});
      }, 1000);
    });
  }

  _buildBlogCard(title, img, link) {
    return (
      <div className="col s12 m6 l4">
        <div className="card small blue-grey darken-1">
          <div className="card-image">
            <img src={img} />
            <span className="card-title" style={this._initCss().cardTitle}>{title}</span>
          </div>
          <div className="card-action">
            <a href={link} target="_blank">This is a link</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="row section">
          <h2 className="header page-section-title">Blog</h2>
          {this._buildBlogCard(
            this.state.data[0].title,
            this.state.data[0].img,
            this.state.data[0].link
          )}
          {this._buildBlogCard(
            this.state.data[1].title,
            this.state.data[1].img,
            this.state.data[1].link
          )}
          {this._buildBlogCard(
            this.state.data[2].title,
            this.state.data[2].img,
            this.state.data[2].link
          )}
        </div>
      );
    }
    else {
      return (
        <div className="row section">
          <h2 className="header page-section-title">Blog</h2>
          <div className="col s12 m12 center">
           <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
