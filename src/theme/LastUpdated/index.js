import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';

export default function LastUpdated({
	lastUpdatedAt,
	formattedLastUpdatedAt,
	lastUpdatedBy,
}) {
	return (
		<span className={ThemeClassNames.common.lastUpdated}> {
				['最近一次更新：',
				<b>{lastUpdatedBy}</b>,
					'，',
					<b>
					<time dateTime={new Date(lastUpdatedAt * 1000).toISOString()}>
						{formattedLastUpdatedAt}
					</time>
					</b>,
					'．'
				]
			}
			{process.env.NODE_ENV === 'development' && (
				<div>
					{/* eslint-disable-next-line @docusaurus/no-untranslated-text */}
					<small> (Simulated during dev for better perf)</small>
				</div>
			)}
		</span>
	);
}
