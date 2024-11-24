import React,{useState, useEffect} from 'react'
import Navbar from "../../components/Navbar";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// // import * as C from "./styles";

import { View } from '../../components/View';
import { 
  MainPage, 
  Container, 
  Wrapper, 
  Title,  
  FormContainer, 
  ViewContainer, 
  FormGroup, 
  Button, 
  Table, 
  TableResponsive 
} from "./styles";

const getDatafromLS = () => {
  const data = localStorage.getItem('pontos');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Home = () => {
  const [pontos, setPontos] = useState(getDatafromLS());

  const [Justificativa, setJustificativa] = useState('');
  const [Data, setData] = useState('');
  const [Hora, setHora] = useState('');

  const handleAddpontoubmit = (e) => {
    e.preventDefault();
    let ponto = { Justificativa, Data, Hora };
    setPontos([...pontos, ponto]);
    setJustificativa('');
    setData('');
    setHora('');
  };

  useEffect(() => {
    localStorage.setItem('pontos', JSON.stringify(pontos));
  }, [pontos]);

  return (
    <MainPage>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Ponto Senai</Title>
          <div>
            <FormContainer>
              <FormGroup autoComplete="off" onSubmit={handleAddpontoubmit}>
              {/* <label>Justificativa</label>
                <input 
                  type="text" 
                  required 
                  onChange={(e) => setJustificativa(e.target.value)} 
                  value={Justificativa} 
                />
                <br />
              <label>Data </label>
                <input 
                  type='date' 
                  required 
                  onChange={(e) => setData(e.target.value)} 
                  value={Data} 
                />
                <br />
              <label>Hora</label>
                <input 
                  type="time" 
                  required 
                  onChange={(e) => setHora(e.target.value)} 
                  value={Hora} 
                />
                <br /> */}
                <Button type="submit">Bater Ponto</Button>
              </FormGroup>
            </FormContainer>

            <ViewContainer>
              {pontos.length > 0 ? (
                <>
                  <TableResponsive>
                    <Table>
                      <thead>
                        <tr>
                          <th>Justificativa</th>
                          <th>Data</th>
                          <th>Hora</th>
                        </tr>
                      </thead>
                      <tbody>
                          <View pontos={pontos} />
                        </tbody>
                    </Table>
                    
                  </TableResponsive>
                  
                </>
              ) : (
                <div>Nenhum ponto foi adicionado até o momento</div>
              )}
            </ViewContainer>
          </div>
        </Wrapper>
      </Container>
    </MainPage>
  );
};

export default Home;
