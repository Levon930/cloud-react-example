/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

import {
  usePublicFolderMetadataLazyQuery,
  usePublicLinkInfoQuery,
  useSecureFolderMetadataMutation,
} from '@api';
import { useToggle } from '@hooks';
import useSessionStorage from '@hooks/useSessionStorage/useSessionStorage';
import { PublicLinkHeader } from '../PublicLinkHead';
import { PublicLinkLeftSidebar } from '../PublicLinkLeftSidebar';
import { PublicLinkRightSidebar } from '../PublicLinkRightSidebar';
import { PublicPassword } from '../PublicPassword';
import { PasswordEvent } from '../PublicPassword/publicPasswordTypes';

import { Styled } from '../PublicLink.styled';

interface param {
  [key: string]: string;
}
const PublicLinkLayout: React.FC = ({ children }) => {
  const [openRight, setOpenRight] = useToggle(true);
  const [value, setValue] = useSessionStorage('password');
  const { slug } = useParams<param>();
  const history = useHistory();
  const { data } = usePublicLinkInfoQuery({ variables: { input: { hash: slug } } });
  const [secureFolderMetadata, secureMetadata] = useSecureFolderMetadataMutation();
  const [PublicFolderMetadata, elem] = usePublicFolderMetadataLazyQuery({
    variables: { input: { hash: slug } },
  });
  useEffect(() => {
    if (data && !data?.publicLinkInfo.password) {
      PublicFolderMetadata();
    } else if (data?.publicLinkInfo.password && !value) {
      history.push({
        search: '?modal=password',
      });
    }
  }, [PublicFolderMetadata, data, history, value]);
  useEffect(() => {
    if (value) {
      secureFolderMetadata({
        variables: {
          input: {
            hash: slug,
            password: value,
          },
        },
      });
    }
  }, [value, secureFolderMetadata, slug]);

  console.log(elem, data, 'param');
  console.log(secureMetadata, 'mutation');
  const postPassword = async (password: PasswordEvent) => {
    await secureFolderMetadata({
      variables: {
        input: {
          hash: slug,
          ...password,
        },
      },
    });

    await setValue(password.password);
    await history.push({
      search: '',
    });
  };

  const handleDrawerRight = () => {
    setOpenRight(!openRight);
  };

  return (
    <>
      <PublicPassword slug={slug} postPassword={postPassword} secureMetadata={secureMetadata} />
      <Styled.PublicLinkLayoutContainer>
        <PublicLinkHeader />
        <Styled.MainBodyContainer>
          <Styled.LayoutContainer>
            <Styled.MainMenuWrapper>
              <PublicLinkLeftSidebar download />
            </Styled.MainMenuWrapper>
            <Styled.ChildrenContainer>{children}</Styled.ChildrenContainer>
            <Styled.SideBarDrawer variant="permanent" anchor="right" open={openRight}>
              <PublicLinkRightSidebar
                open={openRight}
                handleDrawerRight={handleDrawerRight}
                download
              />
            </Styled.SideBarDrawer>
          </Styled.LayoutContainer>
        </Styled.MainBodyContainer>
      </Styled.PublicLinkLayoutContainer>
    </>
  );
};

export default PublicLinkLayout;
