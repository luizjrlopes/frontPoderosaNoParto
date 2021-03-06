import React from 'react';
import * as S from './styles';

import filter from '../../assets/iconefilter100%.png';

function FilterCardProgresso(props) {
  return (
    <S.Container actived={props.actived}>
      <img src={filter} alt="Filtro" />
      <span>{props.title}</span>
    </S.Container>
  )
}

export default FilterCardProgresso;
