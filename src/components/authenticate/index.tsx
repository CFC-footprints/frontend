import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AppID from "ibmcloud-appid-js";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import config from "../../config.json";
import updateFootprint from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "./styles.scss";

function Authenticate(props: any) {
  const [loading, setLoading] = useState(false);
  const { children } = props;

  const dispatch = useDispatch();
  const stateTokens = useTypedSelector((state) => state.tokens);

  const appID = React.useMemo(() => {
    return new AppID();
  }, []);

  (async () => {
    try {
      await appID.init(config);
    } catch (e) {
      dispatch(updateFootprint({ error: true }));
    }
  })();

  async function doLogin() {
    try {
      setLoading(true);
      const tokens = await appID.signin();
      dispatch(updateFootprint({ tokens }));
      setLoading(false);
    } catch (e) {
      dispatch(updateFootprint({ error: true }));
      setLoading(false);
    }
  }

  const LoginButton = () => {
    return (
      <Container fluid>
        <div className="login-container">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Button
              onClick={() => doLogin()}
              size="lg"
              className="login-button"
              variant="primary"
            >
              Login
            </Button>
          )}
        </div>
      </Container>
    );
  };

  return stateTokens && stateTokens.accessToken && !loading
    ? children
    : children;
}

export default Authenticate;
