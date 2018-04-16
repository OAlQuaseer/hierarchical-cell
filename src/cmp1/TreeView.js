import React from "react";
import classNames from 'classnames';
import './TreeView.css'



class TreeView extends React.Component {
    render() {
        const data = this.props.data;
        const childNodes = data.map((node, i) => {
            return <TreeNode key={i} title={node.title} childNodes={node.childNodes} cmuLevel={node.cmuLevel}></TreeNode>
        })

        return (
            <div>
                <ul style={{"listStyleType": "none"}}>
                    {childNodes}
                </ul>
            </div>
        );

    }


}


class TreeNode extends React.Component {
    render() {

        var childNodes = this.props.childNodes;
        var title = this.props.title;
        var cmuLevel = this.props.cmuLevel


        childNodes = childNodes && childNodes.map(function (node, i) {
            return <TreeNode key={i} title={node.title} childNodes={node.childNodes} cmuLevel={node.cmuLevel}></TreeNode>
        });

        var classObj = {
            togglable: true,
            "parent": (childNodes), 
            "leaf": !(childNodes),
        };

        return (
            <li >
                <h5 className={classNames(classObj)}><span style={{"paddingLeft":"0.5rem"}}>{title} ---------------- CMU Level {cmuLevel}</span></h5>
                {childNodes && <ul style={{"listStyleType": "none"}} >{childNodes}</ul>}
            </li>
        );




    }
}

export default TreeView;
