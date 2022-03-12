import React from 'react';

import { useUsageStatisticsQuery } from '@api';
import { WithLoading } from '@components';
import { bytesToSize } from '@utils';
import StorageIcon from 'components/SvgComponents/StorageIcon';
import TrafficIcon from 'components/SvgComponents/TrafficIcon';
import { ProgressBar } from './ProgressBar';

import { Styled } from './UsageStatistics.styled';

/**
 * move to main layout
 */
const UsageStatistics: React.FC = () => {
  const { data, loading } = useUsageStatisticsQuery();

  return (
    <Styled.UsageWrapper>
      {data?.usageStatistics && (
        <WithLoading loading={loading}>
          <ProgressBar
            title="Storage"
            usage={bytesToSize(data.usageStatistics.storage_size)}
            total={bytesToSize(data.usageStatistics.quota_size)}
            value={(data.usageStatistics.storage_size * 100) / data.usageStatistics.quota_size}
            ImgComponent={StorageIcon}
          />
          <ProgressBar
            title="Traffic"
            usage={bytesToSize(data.usageStatistics.traffic_size)}
            total={bytesToSize(data.usageStatistics.quota_size)}
            value={(data.usageStatistics.traffic_size * 100) / data.usageStatistics.quota_size}
            ImgComponent={TrafficIcon}
          />
        </WithLoading>
      )}
    </Styled.UsageWrapper>
  );
};

export default UsageStatistics;
