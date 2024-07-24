import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
function LastUpdatedAtDate({lastUpdatedAt}) {
  const atDate = new Date(lastUpdatedAt);
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
  return (
	<b>
	  <time dateTime={atDate.toISOString()} itemProp="dateModified">
		{formattedLastUpdatedAt}
	  </time>
	</b>
  );
}

export default function LastUpdated({lastUpdatedAt, lastUpdatedBy}) {
	var atDate = lastUpdatedAt ? (
		<LastUpdatedAtDate lastUpdatedAt={lastUpdatedAt} />
	  ) : (
		''
	  );
	 var byUser = lastUpdatedBy ? (<b>{lastUpdatedBy}</b>) : ''
  return (
    <span className={ThemeClassNames.common.lastUpdated}>
		最后一次更新：{byUser}，{atDate}
      {process.env.NODE_ENV === 'development' && (
        <div>
          {/* eslint-disable-next-line @docusaurus/no-untranslated-text */}
          <small> (Simulated during dev for better perf)</small>
        </div>
      )}
    </span>
  );
}
