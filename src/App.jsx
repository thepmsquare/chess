import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessBishop,
  faChessRook,
  faChessKnight,
  faChessKing,
  faChessQueen,
  faChessPawn,
} from "@fortawesome/free-solid-svg-icons";
import "./stylesheets/App.css";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {
        a1: {
          team: "white",
          item: "rook",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        b1: {
          team: "white",
          item: "knight",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        c1: {
          team: "white",
          item: "bishop",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        d1: {
          team: "white",
          item: "queen",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        e1: {
          team: "white",
          item: "king",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        f1: {
          team: "white",
          item: "bishop",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        g1: {
          team: "white",
          item: "knight",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        h1: {
          team: "white",
          item: "rook",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        a2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        b2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        c2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        d2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        e2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        f2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        g2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        h2: {
          team: "white",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        a3: { isEmpty: true, isHighlighted: false },
        b3: { isEmpty: true, isHighlighted: false },
        c3: { isEmpty: true, isHighlighted: false },
        d3: { isEmpty: true, isHighlighted: false },
        e3: { isEmpty: true, isHighlighted: false },
        f3: { isEmpty: true, isHighlighted: false },
        g3: { isEmpty: true, isHighlighted: false },
        h3: { isEmpty: true, isHighlighted: false },
        a4: { isEmpty: true, isHighlighted: false },
        b4: { isEmpty: true, isHighlighted: false },
        c4: { isEmpty: true, isHighlighted: false },
        d4: { isEmpty: true, isHighlighted: false },
        e4: { isEmpty: true, isHighlighted: false },
        f4: { isEmpty: true, isHighlighted: false },
        g4: { isEmpty: true, isHighlighted: false },
        h4: { isEmpty: true, isHighlighted: false },
        a5: { isEmpty: true, isHighlighted: false },
        b5: { isEmpty: true, isHighlighted: false },
        c5: { isEmpty: true, isHighlighted: false },
        d5: { isEmpty: true, isHighlighted: false },
        e5: { isEmpty: true, isHighlighted: false },
        f5: { isEmpty: true, isHighlighted: false },
        g5: { isEmpty: true, isHighlighted: false },
        h5: { isEmpty: true, isHighlighted: false },
        a6: { isEmpty: true, isHighlighted: false },
        b6: { isEmpty: true, isHighlighted: false },
        c6: { isEmpty: true, isHighlighted: false },
        d6: { isEmpty: true, isHighlighted: false },
        e6: { isEmpty: true, isHighlighted: false },
        f6: { isEmpty: true, isHighlighted: false },
        g6: { isEmpty: true, isHighlighted: false },
        h6: { isEmpty: true, isHighlighted: false },
        a7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        b7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        c7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        d7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        e7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        f7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        g7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        h7: {
          team: "black",
          item: "pawn",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        a8: {
          team: "black",
          item: "rook",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        b8: {
          team: "black",
          item: "knight",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        c8: {
          team: "black",
          item: "bishop",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        d8: {
          team: "black",
          item: "queen",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        e8: {
          team: "black",
          item: "king",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        f8: {
          team: "black",
          item: "bishop",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        g8: {
          team: "black",
          item: "knight",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
        h8: {
          team: "black",
          item: "rook",
          isEmpty: false,
          isHighlighted: false,
          inFocus: false,
        },
      },
      turn: "white",
      teamFacingUp: "white",
      showingNextMoves: false,
    };
  }
  gridOnClick = (event) => {
    let position = event.currentTarget.getAttribute("data-gridid");
    let element = this.state.grid[position];
    if (this.state.showingNextMoves) {
      if (element.isHighlighted) {
        this.setState((oldState) => {
          let oldGridCopy = JSON.parse(JSON.stringify(oldState.grid));
          let focusElement = Object.values(oldGridCopy).find(
            (ele) => ele.inFocus
          );
          let itemInFocus = focusElement.item;
          let teamInFocus = focusElement.team;
          focusElement.item = null;
          focusElement.team = null;
          focusElement.isEmpty = true;
          focusElement.inFocus = false;
          oldGridCopy[position].item = itemInFocus;
          oldGridCopy[position].team = teamInFocus;
          focusElement.isEmpty = false;
          Object.values(oldGridCopy).forEach(
            (ele) => (ele.isHighlighted = false)
          );
          return { showingNextMoves: false, grid: oldGridCopy };
        });
      } else {
        //  do nothing
      }
    } else {
      let currentTeam = this.state.turn;
      if (element.team != currentTeam) {
        return;
      }
      if (element.item === "pawn") {
        this.showPawnAvailableMoves(element, position);
      } else if (element.item === "rook") {
        console.log("rook");
      } else if (element.item === "knight") {
        console.log("knight");
      } else if (element.item === "bishop") {
        console.log("bishop");
      } else if (element.item === "king") {
        console.log("king");
      } else if (element.item === "queen") {
        console.log("queen");
      }
    }
  };

  showPawnAvailableMoves(element, position) {
    let isPawnFacingUp = element.team === this.state.teamFacingUp;
    if (isPawnFacingUp) {
      let isPawnInStartingRow = parseInt(position.slice(1, 2)) === 2;
      if (isPawnInStartingRow) {
        let nextHighlights = [
          `${position.slice(0, 1)}${parseInt(position.slice(1, 2)) + 1}`,
          `${position.slice(0, 1)}${parseInt(position.slice(1, 2)) + 2}`,
        ];
        // is enemy on left front
        if (
          letters[letters.findIndex((ele) => ele === position.slice(0, 1)) - 1]
        ) {
          let leftFrontPosition = `${
            letters[
              letters.findIndex((ele) => ele === position.slice(0, 1)) - 1
            ]
          }${parseInt(position.slice(1, 2)) + 1}`;
          if (
            this.state.grid[leftFrontPosition].team !== this.state.turn &&
            !this.state.grid[leftFrontPosition].isEmpty
          ) {
            nextHighlights.push(leftFrontPosition);
          }
        }
        // is enemy on right front
        if (
          letters[letters.findIndex((ele) => ele === position.slice(0, 1)) + 1]
        ) {
          let rightFrontPosition = `${
            letters[
              letters.findIndex((ele) => ele === position.slice(0, 1)) + 1
            ]
          }${parseInt(position.slice(1, 2)) + 1}`;
          if (
            this.state.grid[rightFrontPosition].team !== this.state.turn &&
            !this.state.grid[rightFrontPosition].isEmpty
          ) {
            nextHighlights.push(rightFrontPosition);
          }
        }

        this.setState((oldState) => {
          let oldGridCopy = JSON.parse(JSON.stringify(oldState.grid));
          nextHighlights.forEach((element) => {
            oldGridCopy[element].isHighlighted = true;
          });
          oldGridCopy[position].inFocus = true;
          return { showingNextMoves: true, grid: oldGridCopy };
        });
      } else {
        let nextHighlights = [
          `${position.slice(0, 1)}${parseInt(position.slice(1, 2)) + 1}`,
        ]; // is enemy on left front
        if (
          letters[letters.findIndex((ele) => ele === position.slice(0, 1)) - 1]
        ) {
          let leftFrontPosition = `${
            letters[
              letters.findIndex((ele) => ele === position.slice(0, 1)) - 1
            ]
          }${parseInt(position.slice(1, 2)) + 1}`;
          if (
            this.state.grid[leftFrontPosition].team !== this.state.turn &&
            !this.state.grid[leftFrontPosition].isEmpty
          ) {
            nextHighlights.push(leftFrontPosition);
          }
        }
        // is enemy on right front
        if (
          letters[letters.findIndex((ele) => ele === position.slice(0, 1)) + 1]
        ) {
          let rightFrontPosition = `${
            letters[
              letters.findIndex((ele) => ele === position.slice(0, 1)) + 1
            ]
          }${parseInt(position.slice(1, 2)) + 1}`;
          if (
            this.state.grid[rightFrontPosition].team !== this.state.turn &&
            !this.state.grid[rightFrontPosition].isEmpty
          ) {
            nextHighlights.push(rightFrontPosition);
          }
        }
        this.setState((oldState) => {
          let oldGridCopy = JSON.parse(JSON.stringify(oldState.grid));
          nextHighlights.forEach((element) => {
            oldGridCopy[element].isHighlighted = true;
          });
          oldGridCopy[position].inFocus = true;
          return { showingNextMoves: true, grid: oldGridCopy };
        });
      }
    } else {
    }
  }
  render = () => {
    return (
      <div className="chess-container">
        {numbers.reverse().map((number, yIndex) =>
          letters.map((letter, xIndex) => (
            <div
              key={`${letter}${number}`}
              className={`chess-square-bg ${
                (yIndex + xIndex) % 2 === 0
                  ? "chess-square-bg-white"
                  : "chess-square-bg-black"
              } ${
                this.state.grid[letter + number].team === "white"
                  ? "chess-square-team-white"
                  : "chess-square-team-black"
              } ${
                this.state.showingNextMoves &&
                this.state.grid[letter + number].isHighlighted
                  ? "chess-square-highlighted"
                  : ""
              }`}
              data-gridid={`${letter}${number}`}
              onClick={this.gridOnClick}
            >
              {this.state.grid[`${letter}${number}`].item === "pawn" ? (
                <FontAwesomeIcon icon={faChessPawn} />
              ) : this.state.grid[`${letter}${number}`].item === "rook" ? (
                <FontAwesomeIcon icon={faChessRook} />
              ) : this.state.grid[`${letter}${number}`].item === "bishop" ? (
                <FontAwesomeIcon icon={faChessBishop} />
              ) : this.state.grid[`${letter}${number}`].item === "knight" ? (
                <FontAwesomeIcon icon={faChessKnight} />
              ) : this.state.grid[`${letter}${number}`].item === "king" ? (
                <FontAwesomeIcon icon={faChessKing} />
              ) : this.state.grid[`${letter}${number}`].item === "queen" ? (
                <FontAwesomeIcon icon={faChessQueen} />
              ) : (
                ""
              )}
            </div>
          ))
        )}
      </div>
    );
  };
}

export default App;
