function InnerEditor() {
    return ( 
        <form action="" className="tweet-editor-form">
            <input type="text" className="tweet-editor-input" />
            <div className="tweet-editor-buttons">
                <ul className="tweet-editor-actions">
                    <li></li>
                </ul>
                <button className="button">Tweet</button>
            </div>
        </form>
     );
}

export default InnerEditor;