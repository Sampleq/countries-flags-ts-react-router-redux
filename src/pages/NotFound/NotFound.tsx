import { Wrapper } from '@/components/Wrapper';
import styles from './NotFound.module.scss';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '@/components/Button';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

interface NotFoundProps {}

export const NotFound = ({}: NotFoundProps) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className={styles.notFound}>
      <Wrapper>
        <Button className={styles.btn} onClick={() => navigate(-1)}>
          <IoArrowBack /> Back
        </Button>
        <h1>NotFound Component</h1>
      </Wrapper>
    </div>
  );
};
