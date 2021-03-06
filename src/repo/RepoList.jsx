import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import styles from './style.less'
import styles from './style.css'
console.log(styles)

class RepoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {
        this.props.promise.then(res => {
            this.setState({
                loading: false,
                data: res
            }), error => {
                this.setState({
                    loading: true,
                    error: error
                })
            }
        })
    }

    render() {
        let nameStyle = {
            margin: 0,
            fontSize: '12px',
            color: 'orange',
            lineHeight: '16px'
        }

        if (this.state.loading) {
            return <span>Loading...</span>
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            let repos = this.state.data.items;
            let repoList = repos.map((repo, index) => {
                return (
                    <li styleName='repo-item' key={index}>
                        <a href={repo.html_url}>{repo.name}</a>
                        ({repo.stargazers_count} stars)
                        <br/>
                        <p style={nameStyle}>{repo.full_name}</p>
                        {repo.description}
                    </li>
                );
            });
            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol styleName='repo-list'>{repoList}</ol>
                </main>
            );
        }
    }
}

export default CSSModules(RepoList, styles)
