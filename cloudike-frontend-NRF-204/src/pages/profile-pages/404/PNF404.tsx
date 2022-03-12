import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Icon404 } from '@components/SvgComponents';

import { Styled } from './PNF404.styled';

const PNF404: React.FC = () => {
  const { t } = useTranslation('pnf404');

  const history = useHistory();

  return (
    <Styled.PageContainer>
      <Styled.Container>
        <Styled.Icon404Container>
          <Icon404 />
        </Styled.Icon404Container>
        <Styled.Title>{t('texts.title')}</Styled.Title>
        <Styled.TextPrimary>{t('texts.primery')}</Styled.TextPrimary>
        <Styled.Text>{t('texts.secondary')}</Styled.Text>
        <Styled.FlexBox>
          <Button color="secondary" variant="outlined" onClick={() => history.go(-1)}>
            {t('buttons.previous')}
          </Button>
          <Button color="primary" variant="contained">
            {t('buttons.customer')}
          </Button>
        </Styled.FlexBox>
        <Styled.FooterText>{t('footer')}</Styled.FooterText>
      </Styled.Container>
    </Styled.PageContainer>
  );
};

export default PNF404;
