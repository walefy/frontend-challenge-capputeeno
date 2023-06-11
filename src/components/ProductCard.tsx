import { styled } from "styled-components";

const CardContainer = styled.div`
  width: 256px;
  height: 378px;
  border-radius: 8px 8px 0px 0px;
  background-color: white;
`;

const Image = styled.img`
  border-radius: 8px 8px 0px 0px;
  background-color: transparent;
`;

const Name = styled.p`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  margin: 8px 12px;
  border-bottom: 1px solid var(--shapes-color);
  color: var(--dark-color);
`;

const Price = styled.p`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  margin: 8px 12px;
  color: var(--shapes-dark-color);
`;

export function ProductCard() {
  return (
    <CardContainer>
      <Image src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg" alt="" width={ 256 } height={ 300 } />
      <Name>Caneca de cerâmica rústica</Name>
      <Price>{ (6551 / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</Price>
    </CardContainer>
  );
}
