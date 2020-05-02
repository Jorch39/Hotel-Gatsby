import React from "react"
import Layout from '../components/layout';
import Hotel from '../components/hotel';
import ContentInicio from '../components/contentInicio';
import useRooms from '../hooks/use-rooms';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import RoomPreview from '../components/roomPreview';

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }

`;


const IndexPage = () => {

  const rooms = useRooms();

  console.log(rooms);

  return ( 
    <Layout>
      <Hotel />
      <ContentInicio />

      <h2
        css={css`
        text-align: center;
        font-size: 3rem;
        margin-top: 4rem;
      `}
      >Nuestras habitaciones</h2>
      
      <RoomsList>
        {rooms.map(room => (
          <RoomPreview key={ room.id } room={ room }/>
        ))}
      </RoomsList>
    </Layout>
  )
}

export default IndexPage;
