import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import range from "lodash/range";
import random from "lodash/random";
import Radium, { Style } from "radium";
import * as docgen from "react-docgen";
import {
  VictoryChart, VictoryLine, VictoryAxis, VictoryBar, VictoryScatter, VictoryStack
} from "../../src/index";
import {VictoryTheme} from "formidable-landers";

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!../../src/components/victory-chart/victory-chart"))}
          scope={{
            range, random, React, ReactDOM, VictoryScatter, VictoryLine,
            VictoryAxis, VictoryBar, VictoryChart, VictoryStack
          }}
          playgroundtheme="elegant"
        />
        <Style rules={VictoryTheme}/>
      </div>
    );
  }
}

export default Radium(Docs);
