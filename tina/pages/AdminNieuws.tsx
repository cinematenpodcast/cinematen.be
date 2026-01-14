import React from 'react';
import { tinaField, useTina } from "tinacms/dist/react";
import type { NieuwsQuery, NieuwsQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Props = {
	variables: NieuwsQueryVariables;
	data: NieuwsQuery;
	query: string;
}

export default function AdminNieuws(props: Props) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	const nieuws = data.nieuws;

	return (
		<>
			<div data-tina-field={tinaField(nieuws, "body")}>
				<TinaMarkdown content={nieuws.body} />
			</div>
			{nieuws.trailer && (
				<div id="trailer" data-tina-field={tinaField(nieuws, "trailer")}>
					<h2 style={{ textAlign: "center", marginTop: "20px" }}>Bekijk hier de trailer:</h2>
					<div className="video-container">
						<div className="video-wrapper">
							<iframe 
								src={`https://www.youtube-nocookie.com/embed/${nieuws.trailer}`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
