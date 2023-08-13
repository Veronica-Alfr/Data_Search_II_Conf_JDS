import instance from "@/app/axios";
import React, { useState } from "react";

const FormOne = () => {
  const [generalInfo, setGeneralInfo] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [primarySecondaryEducation, setPrimarySecondaryEducation] =
    useState("");
  const [academicBackground, setAcademicBackground] = useState("");
  const [involvement, setInvolvementValues] = useState({
    volunteer_work: false,
    environmental_agenda: false,
    environmental_interest: false,
    no_involvement: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setInvolvementValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await instance.post("/interviewees", {
        generalInfo,
        fullName,
        email,
        city,
        age,
        race,
        genderIdentity,
        primarySecondaryEducation,
        academicBackground,
        involvement,
      });

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="generalInfo">Informações gerais sobre você:</label>
        <textarea
          id="generalInfo"
          value={generalInfo}
          onChange={(e) => setGeneralInfo(e.target.value)}
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
          <option value="white">Branco</option>
          <option value="brown">Pardo</option>
          <option value="black">Preto</option>
          <option value="indigenous">Indígena</option>
          <option value="asian">Amarelo</option>
          <option value="not-response">Prefiro não responder</option>
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
          <option value="cis-woman">Mulher cis</option>
          <option value="trans-woman">Mulher trans</option>
          <option value="cis-man">Homens cis</option>
          <option value="trans-man">Homem trans</option>
          <option value="no-binarie">Não-binário</option>
          <option value="not-response">Prefiro não responder</option>
        </select>
      </div>
      <div></div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="volunteer_work"
            value="Já realizei trabalho voluntário"
            checked={involvement.volunteer_work}
            onChange={handleCheckboxChange}
          />
          Já realizei trabalho voluntário
        </label>
        <label>
          <input
            type="checkbox"
            name="environmental_agenda"
            checked={involvement.environmental_agenda}
            onChange={handleCheckboxChange}
          />
          Já atuei com a pauta ambiental e sustentável
        </label>
        <label>
          <input
            type="checkbox"
            name="environmental_interest"
            checked={involvement.environmental_interest}
            onChange={handleCheckboxChange}
          />
          Nunca me envolvi, mas tenho interesse
        </label>
        <label>
          <input
            type="checkbox"
            name="no_involvement"
            checked={involvement.no_involvement}
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
            <option value="school-public">Rede Pública</option>
            <option value="school-private">Rede Privada</option>
            <option value="school-mixed">Misto</option>
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
          <option value="incomplete-high-school">
            Ensino Médio Incompleto
          </option>
          <option value="complete-high-school">Ensino Médio Completo</option>
          <option value="incomplete-graduation">Graduação Incompleta</option>
          <option value="complete-graduation">Graduação Completa</option>
          <option value="more-graduations">
            Pós Graduação, Mestrado, Doutorado, PHD
          </option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormOne;
