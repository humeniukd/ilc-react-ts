import { Button } from "../Button";
import './TopBar.scss'

export function TopBar() {
  const isAuthenticated = false
  function handleAccountClick() {}

  return (
    <div className="topbar__container">
      <div className="topbar">
        <div>
          <a href="/Rep">
            <Button className="button--text topbar__button">
              FIND A REPRESENTATIVE
            </Button>
          </a>|
          <Button className="button--text topbar__button">
            BECOME A REPRESENTATIVE
          </Button>
        </div>
        <div>
          { !isAuthenticated ?
            <Button
              className="button--text topbar__button"
              onClick={handleAccountClick}
            >
              CUSTOMER LOGIN / REGISTRATION
            </Button>
            :
            <div className="account" onClick={handleAccountClick}>
              <svg viewBox="0 0 23.8 29.5">
                <path
                    d="m 0,29.48381 c 0,0 0.39974,-11.36425 4.04061,-14.39467 4.90355,4.60886 9.16066,4.7208 14.83661,-10e-6 3.65566,3.10787 4.86136,14.39468 4.86136,14.39468 z"
                    fill="currentColor">
                </path>
                <ellipse
                    cx="11.553617"
                    cy="7.8760314"
                    rx="7.9549513"
                    ry="7.8760333"
                    fill="currentColor"
                >
                </ellipse>
              </svg>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

