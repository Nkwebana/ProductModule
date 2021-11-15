import styled from 'styled-components';

const StyledProductWrapper = styled.TouchableOpacity`
  background-color: lightgrey;
  margin: 10px 10px 0 10px;
  flex-direction: row;
`;

const StyledImage = styled.Image`
  width: 90px;
  height: 90px;
  margin:5px;
`;

const StyledProductInfo = styled.View`
  margin: 10px;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const StyledDescription = styled.Text`
  font-size: 15px;
  margin-top: 5px;
`;

const StyledPrice = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
`;

const StyledAddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-Right: 10px;
  margin-Bottom: 5px;
`;

const StyledButtonTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;

export {
  StyledProductWrapper,
  StyledImage,
  StyledProductInfo,
  StyledTitle,
  StyledDescription,
  StyledPrice,
  StyledAddToCartButton,
  StyledButtonTitle
} 