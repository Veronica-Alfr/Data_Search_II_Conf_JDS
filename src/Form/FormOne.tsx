import instance from "@/app/axios";
import React, { useState } from "react";
import "@/Form/FormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [errorEmptyNameField, setErrorEmptyNameField] =
    useState<boolean>(false);
  const [errorEmptyEmailField, setErrorEmptyEmailField] =
    useState<boolean>(false);
  const [errorEmailValidation, setErrorEmailValidation] =
    useState<boolean>(false);
  const [errorEmptyCityField, setErrorEmptyCityField] =
    useState<boolean>(false);
  const [errorEmptyAgeField, setErrorEmptyAgeField] = useState<boolean>(false);

  // const [errorEmptyKnowlegdeLevelField, setErrorEmptyKnowlegdeLevelField] =
  //   useState<boolean>(false);
  // const [errorEmptyClimateChangesField, setErrorEmptyClimateChangesField] =
  //   useState<boolean>(false);

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
    esg: false,
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
  const [dataPermission, setDataPermission] = useState(false);

  // const [errorEmptyOilExplorationField, setErrorEmptyOilExplorationField] =
  //   useState<boolean>(false);
  // const [
  //   errorEmptyConsumptionAndEcologhyField,
  //   setErrorEmptyConsumptionAndEcologhyField,
  // ] = useState<boolean>(false);
  const [errorEmptyCampinasChangesField, setErrorEmptyCampinasChangesField] =
    useState<boolean>(false);
  const [errorEmptyCommentsField, setErrorEmptyCommentsField] =
    useState<boolean>(false);

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

  const handleDataPermission = () => {
    setDataPermission(!dataPermission);
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
        dataPermission,
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
      esg: false,
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
    setDataPermission(false);
  };

  const validationFields = () => {
    if (fullName === "" || fullName.length < 12) {
      setErrorEmptyNameField(true);
    } else {
      setErrorEmptyNameField(false);
    }

    if (email === "") {
      setErrorEmptyEmailField(true);
      setErrorEmailValidation(false);
    } else {
      setErrorEmptyEmailField(false);
    }

    if (city === "") {
      setErrorEmptyCityField(true);
    } else {
      setErrorEmptyCityField(false);
    }

    if (age === "") {
      setErrorEmptyAgeField(true);
    } else {
      setErrorEmptyAgeField(false);
    }

    if (campinasChanges === "") {
      setErrorEmptyCampinasChangesField(true);
    } else {
      setErrorEmptyCampinasChangesField(false);
    }

    if (comments === "") {
      setErrorEmptyCommentsField(true);
    } else {
      setErrorEmptyCommentsField(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    validationFields();

    const emailRegex = /\S+@\S+\.\S+/;
    const validateEmail = emailRegex.test(email);

    if (email !== "" && !validateEmail) {
      setErrorEmailValidation(true);
    } else {
      setErrorEmailValidation(false);
    }

    if (
      validateEmail &&
      fullName !== "" &&
      city !== "" &&
      age !== "" &&
      campinasChanges !== "" &&
      comments !== ""
    ) {
      createIntervieweeForm();

      toast.success("Formulário enviado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      resetStateValues();
    }
  };

  return (
    <form id="form" className="form-container">
      <div className="div-form">
        <label htmlFor="generalInfo" className="label-text">
          Informações gerais sobre você:
        </label>
        <textarea
          id="generalInfo"
          value={generalInfo}
          onChange={(e) => setGeneralInfo(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div className="div-form">
        <label htmlFor="fullName" className="label-text">
          Nome completo:
        </label>
        <input
          className={`${errorEmptyNameField && "input-error"}`}
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errorEmptyNameField && (
          <p className="error-message">
            Nome é obrigatório e deve ser completo.
          </p>
        )}
      </div>
      <div className="div-form">
        <label htmlFor="email" className="label-text">
          Seu melhor e-mail:
        </label>
        <input
          className={`${
            (errorEmptyEmailField || errorEmailValidation) && "input-error"
          }`}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmptyEmailField && (
          <p className="error-message">Email é obrigatório.</p>
        )}
        {errorEmailValidation && (
          <p className="error-message">Email inválido.</p>
        )}
      </div>
      <div className="div-form">
        <label htmlFor="city" className="label-text">
          Cidade que você vive atualmente:
        </label>
        <input
          className={`${errorEmptyCityField && "input-error"}`}
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {errorEmptyCityField && (
          <p className="error-message">Cidade é obrigatório.</p>
        )}
      </div>
      <div className="div-form">
        <label htmlFor="age" className="label-text">
          Sua idade:
        </label>
        <input
          className={`${errorEmptyAgeField && "input-error"}`}
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errorEmptyAgeField && (
          <p className="error-message">Idade é obrigatório.</p>
        )}
      </div>
      <div className="div-form">
        <label htmlFor="race" className="label-text">
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
      <div className="div-form">
        <label htmlFor="genderIdentity" className="label-text">
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
      <div className="div-form">
        <label htmlFor="questions" className="label-text">
          Perguntas que nos queira fazer?
        </label>
        <textarea
          id="questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div className="div-form social-involvement">
        <p className="title-options">Nos fale sobre seu envolvimento social:</p>
        <div className="options-check">
          <label>
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
        </div>
      </div>
      <div className="div-form">
        <label htmlFor="academicBackground" className="label-text">
          Formação acadêmica:
        </label>
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
        <div className="options-check-education">
          <p className="title-select">
            Qual rede foi predominante na sua educação primária e secundária?
          </p>
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
      </div>
      <div className="div-form sustainable-knowledge">
        <div className="worried-climate">
          <p className="title-options">
            Como você mediria seus conhecimentos sobre a Agenda 2030 e os 17
            Objetivos de Desenvolvimento Sustentável (ODS)?
          </p>
          <div className="options-check">
            <div className="container-options-and-question">
              <p>O que é isso??</p>
              <div className="container-options">
                <label>
                  1
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="1"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  2
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="2"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  3
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="3"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  4
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="4"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  5
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="5"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  6
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="6"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  7
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="7"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  8
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="8"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  9
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="9"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
                <label>
                  10
                  <input
                    type="radio"
                    name="knowledgeLevel"
                    value="10"
                    onChange={handleKnowlegdeLevel}
                  />
                </label>
              </div>
              <p>Entendo muito sobre e conheço a maioria das ODSs!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-form worried-climate">
        <p className="title-options">
          O quão preocupado você está com as mudanças climáticas?
        </p>
        <div className="container-options-and-question">
          <p>Não vejo motivo para preocupação</p>
          <div className="container-options">
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
          </div>
          <p>Perco o sono a noite!</p>
        </div>
      </div>
      <div className="div-form">
        <p className="title-options">
          Na sua infância, até os 14 anos, o quanto você sente que foi exposto à
          pauta climática?
        </p>
        <div className="options-check">
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
              name="agendaClimaticCommunities"
              checked={agendaClimatic.agendaClimaticCommunities}
              onChange={handleAgendaClimaticChange}
            />
            Conversava com amigos e familiares sobre o tema de vez em quando
          </label>
          <label>
            <input
              type="checkbox"
              name="agendaClimaticConversations"
              checked={agendaClimatic.agendaClimaticConversations}
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
      </div>
      <div className="div-form climate-actions">
        <p className="title-options">
          Assinale tema e termos que você conhece consideravelmente:
        </p>
        <div className="options-check">
          <label>
            <input
              type="checkbox"
              name="greenJob"
              checked={climateActions.greenJob}
              onChange={handleClimateActionChange}
            />
            Emprego verde
          </label>
          <label>
            <input
              type="checkbox"
              name="esg"
              checked={climateActions.esg}
              onChange={handleClimateActionChange}
            />
            ESG
          </label>
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
      </div>
      <div className="div-form ">
        <p className="title-options">
          Bora testar seu conhecimento em notícias recentes? O quanto você ouviu
          falar sobre a exploração de Petróleo na Floresta Amazônica?
        </p>
        <div className="options-check">
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
      </div>
      <div className="div-form consumption-and-ecologhy">
        <p className="title-options">
          "Dia da Sobrecarga da Terra: Quando o consumo supera os recursos
          ecológicos do planeta" - Você leu sobre isso nas últimas semanas?
        </p>
        <div className="options-check">
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
      </div>
      <div className="div-form">
        <label htmlFor="descriptionFinal" className="label-text">
          Descrições sobre algum assunto:
        </label>
        <textarea
          id="descriptionFinal"
          value={descriptionFinal}
          onChange={(e) => setDescriptionFinal(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div className="div-form">
        <label htmlFor="campinasChanges" className="label-text">
          O que você gostaria de ver acontecer na Região Metropolitana de
          Campinas acerca de sustentabilidade? Solte sua voz!
        </label>
        <textarea
          className={`${errorEmptyCampinasChangesField && "textarea-error"}`}
          id="campinasChanges"
          value={campinasChanges}
          onChange={(e) => setCampinasChanges(e.target.value)}
        />
        {errorEmptyCampinasChangesField && (
          <p className="error-message">Este campo é obrigatório.</p>
        )}
      </div>
      <div className="div-form">
        <label htmlFor="comments" className="label-text">
          Dúvidas, comentários, sugestões, feedback...
        </label>
        <textarea
          className={`${errorEmptyCommentsField && "textarea-error"}`}
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        {errorEmptyCommentsField && (
          <p className="error-message">Este campo é obrigatório.</p>
        )}
      </div>
      <div className="div-form">
        <div className="div-permission">
          <label htmlFor="permission" className="label-text">
            Eu concordo em ceder meus dados, de forma anônima, para o uso em
            pesquisas pela Hesac
          </label>
          <input
            type="checkbox"
            name="dataPermission"
            value="agree"
            checked={dataPermission}
            onChange={handleDataPermission}
          />
        </div>
      </div>
      <button onClick={handleSubmit} type="submit" className="button-send">
        Enviar
      </button>
      <ToastContainer />
    </form>
  );
};

export default FormOne;
