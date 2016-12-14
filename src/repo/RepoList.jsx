import React, { Component } from 'react'
import styles from './style.less'
// import styles from './style.css'
console.log(styles)

export default class RepoList extends Component {
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
        if (this.state.loading) {
            return <span>Loading...</span>
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            let repos = this.state.data.items;
            let repoList = repos.map((repo, index) => {
                return (
                    <li className={styles['repo-item']} key={index}>
                        <a href={repo.html_url}>{repo.name}</a>
                        ({repo.stargazers_count} stars)
                        <br/>
                        {repo.full_name}
                        <br/>
                        {repo.description}
                    </li>
                );
            });
            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol className={styles['repo-list']}>{repoList}</ol>
                </main>
            );
        }
    }
}
