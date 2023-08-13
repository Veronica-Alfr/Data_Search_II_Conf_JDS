import instance from "@/app/axios";
import React, { useState } from "react";

const FormOne = () => {
  const [generalInfo, setGeneralInfo] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const [race, setRace] = useState("Branco");
  const [genderIdentity, setGenderIdentity] = useState("Mulher cis");
  const [primarySecondaryEducation, setPrimarySecondaryEducation] =
    useState("Rede Pública");
  const [questions, setQuestions] = useState("");
  const [academicBackground, setAcademicBackground] = useState(
    "Ensino Médio Incompleto"
  );
  const [knowledgeLevel, setKnowlegdeLevel] = useState(0);
  const [climateChanges, setClimateChanges] = useState(0);

  const [involvement, setInvolvementValues] = useState({
    volunteerWork: false,
    environmentalAgenda: false,
    environmentalInterest: false,
    noInvolvement: false,
  });

  const [agendaClimatic, setAgendaClimatic] = useState({
    agendaClimaticNews: false,
    agendaClimaticSchool: false,
    agendaClimaticConversations: false,
    agendaClimaticCommunities: false,
    agendaClimaticWithoutExposure: false,
  });

  const [climateActions, setClimateActions] = useState({
    greenJob: false,
    // esg: false,
    carbonMarket: false,
    climateJustice: false,
    globalWarming: false,
    unafm: false,
    sustainableDevelopment: false,
    climateAction: false,
    waterCrisis: false,
    impactAgricultureGasEmissions: false,
    importancePreservingAmazonForest: false,
  });

  const [oilExploration, setOilExploration] = useState("");
  const [consumptionAndEcologhy, setConsumptionAndEcologhy] = useState("");
  const [descriptionFinal, setDescriptionFinal] = useState("");
  const [campinasChanges, setCampinasChanges] = useState("");
  const [comments, setComments] = useState("");

  const handleKnowlegdeLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKnowlegdeLevel(parseInt(event.target.value));
  };

  const handleOilExploration = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOilExploration(event.target.value);
  };

  const handleClimateChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClimateChanges(parseInt(event.target.value));
  };

  const handleConsumptionAndEcologhy = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConsumptionAndEcologhy(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setInvolvementValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleAgendaClimaticChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    setAgendaClimatic((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleClimateActionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    setClimateActions((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const createIntervieweeForm = async () => {
    const ageInt = parseInt(age);
    try {
      const response = await instance.post("/interviewees", {
        generalInfo,
        fullName,
        email,
        city,
        age: ageInt,
        race,
        genderIdentity,
        primarySecondaryEducation,
        academicBackground,
        ...involvement,
        questions,
        knowledgeLevel,
        climateConcerns: climateChanges,
        ...agendaClimatic,
        ...climateActions,
        heardAboutOilExploration: oilExploration,
        consumptionOutweighsEcologicalResources: consumptionAndEcologhy,
        descriptionFinal,
        campinasChanges,
        comments,
      });

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const resetStateValues = () => {
    setGeneralInfo("");
    setFullName("");
    setEmail("");
    setCity("");
    setAge("");

    setRace("");
    setGenderIdentity("");
    setPrimarySecondaryEducation("");
    setQuestions("");
    setAcademicBackground("");
    setKnowlegdeLevel(0);
    setClimateChanges(0);

    setInvolvementValues({
      volunteerWork: false,
      environmentalAgenda: false,
      environmentalInterest: false,
      noInvolvement: false,
    });

    setAgendaClimatic({
      agendaClimaticNews: false,
      agendaClimaticSchool: false,
      agendaClimaticConversations: false,
      agendaClimaticCommunities: false,
      agendaClimaticWithoutExposure: false,
    });

    setClimateActions({
      greenJob: false,
      // esg: false,
      carbonMarket: false,
      climateJustice: false,
      globalWarming: false,
      unafm: false,
      sustainableDevelopment: false,
      climateAction: false,
      waterCrisis: false,
      impactAgricultureGasEmissions: false,
      importancePreservingAmazonForest: false,
    });

    setOilExploration("");
    setConsumptionAndEcologhy("");
    setDescriptionFinal("");
    setCampinasChanges("");
    setComments("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    createIntervieweeForm();

    resetStateValues();
  };

  return (
    <form>
      <div>
        <label htmlFor="generalInfo">Informações gerais sobre você:</label>
        <textarea
          id="generalInfo"
          value={generalInfo}
          onChange={(e) => setGeneralInfo(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div>
        <label htmlFor="fullName">Nome completo:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Seu melhor e-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">Cidade que você vive atualmente:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Sua idade:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="race">
          Como você se identifica em relação a cor/raça:
        </label>
        <select
          id="race"
          value={race}
          onChange={(e) => setRace(e.target.value)}
        >
          <option value="Branco">Branco</option>
          <option value="Pardo">Pardo</option>
          <option value="Preto">Preto</option>
          <option value="Indígena">Indígena</option>
          <option value="Amarelo">Amarelo</option>
          <option value="Prefiro não responder">Prefiro não responder</option>
        </select>
      </div>
      <div>
        <label htmlFor="genderIdentity">
          Como você se identifica em relação a gênero:
        </label>
        <select
          id="genderIdentity"
          value={genderIdentity}
          onChange={(e) => setGenderIdentity(e.target.value)}
        >
          <option value="Mulher cis">Mulher cis</option>
          <option value="Mulher trans">Mulher trans</option>
          <option value="Homens cis">Homens cis</option>
          <option value="Homem trans">Homem trans</option>
          <option value="Não-binário">Não-binário</option>
          <option value="Prefiro não responder">Prefiro não responder</option>
        </select>
      </div>
      <div>
        <label htmlFor="questions">Perguntas que nos queira fazer?</label>
        <textarea
          id="questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div className="div-form social-involvement">
        <p>Nos fale sobre seu envolvimento social:</p>
        <label htmlFor="">
          <input
            type="checkbox"
            name="volunteerWork"
            value="Já realizei trabalho voluntário"
            checked={involvement.volunteerWork}
            onChange={handleCheckboxChange}
          />
          Já realizei trabalho voluntário
        </label>
        <label>
          <input
            type="checkbox"
            name="environmentalAgenda"
            value="Já atuei com a pauta ambiental e sustentável"
            checked={involvement.environmentalAgenda}
            onChange={handleCheckboxChange}
          />
          Já atuei com a pauta ambiental e sustentável
        </label>
        <label>
          <input
            type="checkbox"
            name="environmentalInterest"
            value="Nunca me envolvi, mas tenho interesse"
            checked={involvement.environmentalInterest}
            onChange={handleCheckboxChange}
          />
          Nunca me envolvi, mas tenho interesse
        </label>
        <label>
          <input
            type="checkbox"
            name="noInvolvement"
            value="Ainda não tenho envolvimento"
            checked={involvement.noInvolvement}
            onChange={handleCheckboxChange}
          />
          Ainda não tenho envolvimento
        </label>
        <p>Qual rede foi predominante na sua educação primária e secundária?</p>
        <label>
          <select
            id="primarySecondaryEducation"
            value={primarySecondaryEducation}
            onChange={(e) => setPrimarySecondaryEducation(e.target.value)}
          >
            <option value="Rede Pública">Rede Pública</option>
            <option value="Rede Privada">Rede Privada</option>
            <option value="Misto">Misto</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="academicBackground">Formação acadêmica:</label>
        <select
          id="academicBackground"
          value={academicBackground}
          onChange={(e) => setAcademicBackground(e.target.value)}
        >
          <option value="Ensino Médio Incompleto">
            Ensino Médio Incompleto
          </option>
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>
          <option value="Graduação Incompleta">Graduação Incompleta</option>
          <option value="Graduação Completa">Graduação Completa</option>
          <option value="Pós Graduação, Mestrado, Doutorado, PHD">
            Pós Graduação, Mestrado, Doutorado, PHD
          </option>
        </select>
      </div>
      <div className="div-form sustainable-knowledge">
        <div className="div-form worried-climate">
          <p>
            Como você mediria seus conhecimentos sobre a Agenda 2030 e os 17
            Objetivos de Desenvolvimento Sustentável (ODS)?
          </p>
          <div className="knowlegde-lvl">
            <p>O que é isso??</p>
          </div>
          <label>
            1
            <input
              type="radio"
              name="knowlegdeLevel"
              value="1"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            2
            <input
              type="radio"
              name="knowlegdeLevel"
              value="2"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            3
            <input
              type="radio"
              name="knowlegdeLevel"
              value="3"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            4
            <input
              type="radio"
              name="knowlegdeLevel"
              value="4"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            5
            <input
              type="radio"
              name="knowlegdeLevel"
              value="5"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            6
            <input
              type="radio"
              name="knowlegdeLevel"
              value="6"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            7
            <input
              type="radio"
              name="knowlegdeLevel"
              value="7"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            8
            <input
              type="radio"
              name="knowlegdeLevel"
              value="8"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <label>
            9
            <input
              type="radio"
              name="knowlegdeLevel"
              value="9"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          10
          <label>
            <input
              type="radio"
              name="knowlegdeLevel"
              value="10"
              onChange={handleKnowlegdeLevel}
            />
          </label>
          <p>Entendo muito sobre e conheço a maioria das ODSs!</p>
        </div>
      </div>
      <div className="div-form worried-climate">
        <p>O quão preocupado você está com as mudanças climáticas?</p>
        <div className="nvl-worried-climate">
          <p>Não vejo motivo para preocupação</p>
        </div>
        <label>
          1
          <input
            type="radio"
            name="climateChanges"
            value="1"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          2
          <input
            type="radio"
            name="climateChanges"
            value="2"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          3
          <input
            type="radio"
            name="climateChanges"
            value="3"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          4
          <input
            type="radio"
            name="climateChanges"
            value="4"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          5
          <input
            type="radio"
            name="climateChanges"
            value="5"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          6
          <input
            type="radio"
            name="climateChanges"
            value="6"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          7
          <input
            type="radio"
            name="climateChanges"
            value="7"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          8
          <input
            type="radio"
            name="climateChanges"
            value="8"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          9
          <input
            type="radio"
            name="climateChanges"
            value="9"
            onChange={handleClimateChanges}
          />
        </label>
        <label>
          10
          <input
            type="radio"
            name="climateChanges"
            value="10"
            onChange={handleClimateChanges}
          />
        </label>
        <p>Perco o sono a noite!</p>
      </div>
      <div>
        <p>
          Na sua infância, até os 14 anos, o quanto você sente que foi exposto à
          pauta climática?
        </p>
        <label>
          <input
            type="checkbox"
            name="agendaClimaticNews"
            checked={agendaClimatic.agendaClimaticNews}
            onChange={handleAgendaClimaticChange}
          />
          Ouvia sobre o tema em noticiários
        </label>
        <label>
          <input
            type="checkbox"
            name="agendaClimaticSchool"
            checked={agendaClimatic.agendaClimaticSchool}
            onChange={handleAgendaClimaticChange}
          />
          Havia tópicos ambientais nas matérias da escola
        </label>
        <label>
          <input
            type="checkbox"
            name="agendaClimaticConversations"
            checked={agendaClimatic.agendaClimaticConversations}
            onChange={handleAgendaClimaticChange}
          />
          Conversava com amigos e familiares sobre o tema de vez em quando
        </label>
        <label>
          <input
            type="checkbox"
            name="agendaClimaticCommunities"
            checked={agendaClimatic.agendaClimaticCommunities}
            onChange={handleAgendaClimaticChange}
          />
          Engagei com comunidades e eventos sobre a pauta
        </label>
        <label>
          <input
            type="checkbox"
            name="agendaClimaticWithoutExposure"
            checked={agendaClimatic.agendaClimaticWithoutExposure}
            onChange={handleAgendaClimaticChange}
          />
          Não sinto que fui exposto
        </label>
      </div>
      <div className="div-form climate-actions">
        <p>Assinale tema e termos que você conhece consideravelmente:</p>
        <label>
          <input
            type="checkbox"
            name="greenJob"
            checked={climateActions.greenJob}
            onChange={handleClimateActionChange}
          />
          Emprego verde
        </label>
        {/* <label>
          <input
            type="checkbox"
            name="esg"
            checked={climateActions.esg}
            onChange={handleClimateActionChange}
          />
          ESG
        </label> */}
        <label>
          <input
            type="checkbox"
            name="carbonMarket"
            checked={climateActions.carbonMarket}
            onChange={handleClimateActionChange}
          />
          Mercado de Carbono
        </label>
        <label>
          <input
            type="checkbox"
            name="climateJustice"
            checked={climateActions.climateJustice}
            onChange={handleClimateActionChange}
          />
          Justiça Climática
        </label>
        <label>
          <input
            type="checkbox"
            name="globalWarming"
            checked={climateActions.globalWarming}
            onChange={handleClimateActionChange}
          />
          Aquecimento Global
        </label>
        <label>
          <input
            type="checkbox"
            name="unafm"
            checked={climateActions.unafm}
            onChange={handleClimateActionChange}
          />
          UNAFM
        </label>
        <label>
          <input
            type="checkbox"
            name="sustainableDevelopment"
            checked={climateActions.sustainableDevelopment}
            onChange={handleClimateActionChange}
          />
          Desenvolvimento Sustentável
        </label>
        <label>
          <input
            type="checkbox"
            name="climateAction"
            checked={climateActions.climateAction}
            onChange={handleClimateActionChange}
          />
          Ação Climática
        </label>
        <label>
          <input
            type="checkbox"
            name="waterCrisis"
            checked={climateActions.waterCrisis}
            onChange={handleClimateActionChange}
          />
          Relação das mudanças climáticas nas enchentes e crise hídrica
          brasileira
        </label>
        <label>
          <input
            type="checkbox"
            name="impactAgricultureGasEmissions"
            checked={climateActions.impactAgricultureGasEmissions}
            onChange={handleClimateActionChange}
          />
          Impacto da Agricultura nas emissões de gases estufa
        </label>
        <label>
          <input
            type="checkbox"
            name="importancePreservingAmazonForest"
            checked={climateActions.importancePreservingAmazonForest}
            onChange={handleClimateActionChange}
          />
          Importância da preservação da Floresta Amazônica
        </label>
      </div>
      <div className="div-form ">
        <p>
          Bora testar seu conhecimento em notícias recentes? O quanto você ouviu
          falar sobre a exploração de Petróleo na Floresta Amazônica?
        </p>
        <label>
          <input
            type="radio"
            name="oilExploration"
            value="Já estudei sobre"
            onChange={handleOilExploration}
          />
          Já estudei sobre
        </label>
        <label>
          <input
            type="radio"
            name="oilExploration"
            value="Vi algumas notícias sobre"
            onChange={handleOilExploration}
          />
          Vi algumas notícias sobre
        </label>
        <label>
          <input
            type="radio"
            name="oilExploration"
            value="Um pouco em redes sociais"
            onChange={handleOilExploration}
          />
          Um pouco em redes sociais
        </label>
        <label>
          <input
            type="radio"
            name="oilExploration"
            value="Não vi nada"
            onChange={handleOilExploration}
          />
          Não vi nada
        </label>
      </div>
      <div className="div-form consumption-and-ecologhy">
        <p>
          "Dia da Sobrecarga da Terra: Quando o consumo supera os recursos
          ecológicos do planeta" - Você leu sobre isso nas últimas semanas?
        </p>
        <label>
          <input
            type="radio"
            name="consumptionAndEcologhy"
            value="Sim, li ou ouvi uma ou mais notícias sobre"
            onChange={handleConsumptionAndEcologhy}
          />
          Sim, li ou ouvi uma ou mais notícias sobre
        </label>
        <label>
          <input
            type="radio"
            name="consumptionAndEcologhy"
            value="Apenas li ou ouvi manchetes"
            onChange={handleConsumptionAndEcologhy}
          />
          Apenas li ou ouvi manchetes
        </label>
        <label>
          <input
            type="radio"
            name="consumptionAndEcologhy"
            value="Talvez tenha ouvido falar"
            onChange={handleConsumptionAndEcologhy}
          />
          Talvez tenha ouvido falar
        </label>
        <label>
          <input
            type="radio"
            name="consumptionAndEcologhy"
            value="Nunca ouvi falar"
            onChange={handleConsumptionAndEcologhy}
          />
          Nunca ouvi falar
        </label>
      </div>
      <div>
        <label htmlFor="descriptionFinal">
          Descrições sobre algum assunto:
        </label>
        <textarea
          id="descriptionFinal"
          value={descriptionFinal}
          onChange={(e) => setDescriptionFinal(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div>
        <label htmlFor="campinasChanges">
          O que você gostaria de ver acontecer na Região Metropolitana de
          Campinas acerca de sustentabilidade? Solte sua voz!
        </label>
        <textarea
          id="campinasChanges"
          value={campinasChanges}
          onChange={(e) => setCampinasChanges(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comments">
          Dúvidas, comentários, sugestões, feedback...
        </label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default FormOne;
