function Topbar({score, highScore}){
    return (
        <div className="navbar">
            <div className="left">
                <h1>Pokemon Memory Game</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className="right">
                <p>Score : {score}</p>
                <p>High Score : {highScore}</p>
            </div>
        </div>
    )
}

export default Topbar