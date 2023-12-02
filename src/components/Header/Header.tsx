import HESACLogo from "../../assets/img/hesac_logo.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Image className="hesac-logo" src={HESACLogo} alt="HESAC Logo" />
      <div className="menu">
        <div className="div-link div-link-home">
          <Link className="link" href="/">
            Início
          </Link>
        </div>
        <div className="div-link div-link-form">
          <Link className="link" href="/form">
            Formulário
          </Link>
        </div>
      </div>
    </header>
  );
}
