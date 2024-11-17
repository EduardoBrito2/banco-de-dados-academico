import useLottery from '../hooks/useLottery';
import LotteryResult from '../components/LotteryResultProps';
import { styled } from 'styled-components';
import Menu from '../components/Menu';



const Home: React.FC = () => {
  const { megasena, loading, error } = useLottery();
  // const navigate = useNavigate();

  // Show loading state while fetching data
  if (loading) {
    return (
      <Loading>
        <Menu></Menu>
        <Text>Carregando...</Text>
      </Loading>
    );
  }

  // Show error message if there is an issue with the request
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {megasena && <LotteryResult megasena={megasena.megasena} />}
    <Menu></Menu>
    </div>
  );
};

export default Home;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
`;

const Text = styled.div`
  border: 2px solid;
  padding: 20px;
  height: 230px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Navigation Buttons Styled-Component
// const NavigationButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 20px;
// `;

// const LinkButton = styled(Link)`
//   padding: 10px 20px;
//   background-color: #209869;
//   color: white;
//   font-size: 16px;
//   border-radius: 5px;
//   text-decoration: none;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #16784f;
//   }
// `;
