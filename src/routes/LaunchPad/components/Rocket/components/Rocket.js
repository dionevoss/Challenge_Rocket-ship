import React, { useState, Component, useEffect } from "react";
import RocketCore from "./RocketCore";

export function FunctionalRocket() {
  const [initialLaunchTime, setInitialLaunchTime] = useState(Date.now());

  useEffect(() => {
    setInitialLaunchTime(false);
  }, []);

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  componentDidMount() {
    this.setState({ initialLaunchTime: false });
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
