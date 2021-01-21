/* eslint-disable max-classes-per-file */
import React, { Component } from 'react'

// https://codedaily.io/tutorials/6/Using-Functions-as-Children-and-Render-Props-in-React-Components
class LoadContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      data: [],
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      // we should check status code here and throw for errors so our catch will work.
      .then((res) => res.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((err) => this.setState({ loading: false, error: true }))
  }

  render() {
    return (
      <div>
        {this.props.children({
          ...this.props,
          ...this.state,
        })}
      </div>
    )
  }
}

class ComplexList extends Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.renderHeader(this.props)}</div>
        <div className="footer">
          {this.props.data.map((item) => this.props.renderListItem(item))}
        </div>
        <div className="footer">{this.props.children}</div>
      </div>
    )
  }
}

function calls() {
  return (
    <LoadContent url="https://yourendpoint.com">
      {({ loading, error, data }) => {
        if (loading) return <span>Loading...</span>
        if (error) return <span>Error loading</span>

        return (
          <ComplexList
            data={data}
            renderHeader={() => <span>{loading ? 'Loading...' : 'Header Content'}</span>}
            renderListItem={(item) => <div>{item}</div>}
          >
            <div>We have {data.length} items</div>
          </ComplexList>
        )
      }}
    </LoadContent>
  )
}
