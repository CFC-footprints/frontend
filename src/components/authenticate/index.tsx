import React from "react";
import { useDispatch } from "react-redux";
import AppID from "ibmcloud-appid-js";
import Button from "react-bootstrap/Button";
import config from "../../config.json";
import updateFootprint from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "./styles.scss";

function Authenticate(props: any) {
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
      const tokens = await appID.signin();
      dispatch(updateFootprint({ tokens }));
    } catch (e) {
      dispatch(updateFootprint({ error: true }));
    }
  }

  const LoginButton = () => {
    return (
      <div className="login-button-container">
        <Button
          onClick={() => doLogin()}
          size="lg"
          className="login-button"
          variant="primary"
        >
          Iniciar Sesión
        </Button>
      </div>
    );
  };

  return stateTokens && stateTokens.accessToken ? children : <LoginButton />;
}

export default Authenticate;
