import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [brasil, setBrasil] = useState({
    nome: "BRASIL",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [qatar, setQatar] = useState({
    nome: "QATAR",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [ecuador, setEcuador] = useState({
    nome: "ECUADOR",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [senegal, setSenegal] = useState({
    nome: "SENEGAL",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [novaZelandia, setNovaZelandia] = useState({
    nome: "NOVA ZELÂNDIA",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [inglaterra, setInglaterra] = useState({
    nome: "INGLATERRA",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [iran, setIra] = useState({
    nome: "IRAN",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [usa, setUsa] = useState({
    nome: "USA",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [gales, setGales] = useState({
    nome: "GALES",
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [argentina, setArgentina] = useState({
    nome: 'ARGENTINA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [arabiaSaudita, setArabiaSaudita] = useState({
    nome: 'ARÁBIA SAUDITA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [mexico, setMexico] = useState({
    nome: 'MÉXICO',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [polonia, setPolonia] = useState({
    nome: 'POLÓNIA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [franca, setFranca] = useState({
    nome: 'FRANÇA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  })
  const [australia, setAustralia] = useState({
    nome: 'AUSTRALIA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [dinamarca, setDinamarca] = useState({
    nome: 'DINAMARCA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [tunisia, setTunisia] = useState({
    nome: 'TUNISIA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [espanha, setEspanha] = useState({
    nome: 'ESPANHA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [costaRica, setCostaRica] = useState({
    nome: 'COSTA RICA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [alemanha, setAlemanha] = useState({
    nome: 'ALEMANHA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [japao, setJapao] = useState({
    nome: 'JAPÃO',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [belgica, setBelgica] = useState({
    nome: 'BELIGICA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [canada, setCanada] = useState({
    nome: 'CANADA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [marrocos, setMarrocos] = useState({
    nome: 'MARROCOS',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [croacia, setCroacia] = useState({
    nome: 'CROACIA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [servia, setServia] = useState({
    nome: 'SERVIA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [suecia, setSuecia] = useState({
    nome: 'SUÉCIA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [camaroes, setCamaroes] = useState({
    nome: 'CAMARÕES',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  })
  const [portugal, setPortugal] = useState({
    nome: 'PORTUGAL',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [ghana, setGhana] = useState({
    nome: 'GHANA',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [uruguai, setUruguai] = useState({
    nome: 'URUGUAI',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  });
  const [koreaDoSul, setKoreaDoSul] = useState({
    nome: 'KOREA DO SUL',
    v: 0,
    e: 0,
    d: 0,
    gp: 0,
    gc: 0,
    sg: 0,
    pts: 0,
  })
  return (
    <UserContext.Provider
      value={{
        brasil,
        qatar,
        setQatar,
        ecuador,
        senegal,
        novaZelandia,
        inglaterra,
        iran,
        usa,
        gales,
        argentina,
        arabiaSaudita,
        mexico,
        polonia,
        franca,
        australia,
        dinamarca,
        tunisia,
        espanha,
        costaRica,
        alemanha,
        japao,
        belgica,
        canada,
        marrocos,
        croacia,
        servia,
        suecia,
        camaroes,
        portugal,
        ghana,
        uruguai,
        koreaDoSul,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
