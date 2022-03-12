import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Button, Divider } from '@material-ui/core';

import { useRefferalCodeQuery } from '@api';
import { toaster } from '@helpers';

import { Styled } from './ReferralCode.styled';

const linkToWebsite = 'https://cloudlike.kr/signup/business?ref=';

const makeCode = (id: number): string => {
  const fullId = id.toString().padStart(6, '0');

  return btoa(fullId);
};

const ReferralCode: React.FC = () => {
  const { t } = useTranslation('accountSettings');
  const { data, loading }: any = useRefferalCodeQuery();
  const [linkReference, setLinkReference] = useState('');

  useEffect(() => {
    if (loading) {
      return;
    }
    try {
      setLinkReference(linkToWebsite + makeCode(data.getUser.userid));
    } catch (e) {
      toaster(t('detailed.referralCode.errorMessage'), 'error');
    }
  }, [data, loading]);

  return (
    <Formik initialValues={{ link: linkReference }} onSubmit={() => undefined} enableReinitialize>
      <Form>
        <h3>Referral code</h3>
        <Divider />
        <Styled.Container>
          <Styled.FormInput name="link" placeholder={linkToWebsite} />
          <CopyToClipboard text={linkReference}>
            <div className="copy-area">
              <Button color="primary" variant="contained" disabled={loading}>
                Copy
              </Button>
            </div>
          </CopyToClipboard>
        </Styled.Container>
      </Form>
    </Formik>
  );
};

export default ReferralCode;
