import {
  GitHub,
  Instagram,
  Mail,
  Send,
  Twitter,
  StorageSharp,
} from "@material-ui/icons";
import React, { memo } from "react";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://github.com/omnirpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          OmniRPA
        </a>
      </div>

      <h5>{t("Make cloud and opensource techonologies easy to use")}</h5>

      <div className="links">
        <a
          href="https://github.com/omnirpa"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href="https://github.com/omnirpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StorageSharp />
        </a>

        <a
          href="https://github.com/omnirpa"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        <a
          href="https://omnirpa.io"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a>

        <a
          href="https://omnirpa.io"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram />
        </a>

        <a
          href="mailto:cs@omnirpa.io"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
