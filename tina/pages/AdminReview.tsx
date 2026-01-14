import React from 'react';
import { tinaField, useTina } from "tinacms/dist/react";
import type { ReviewsQuery, ReviewsQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Props = {
	variables: ReviewsQueryVariables;
	data: ReviewsQuery;
	query: string;
}

export default function AdminReview(props: Props) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	const review = data.reviews;

	return (
		<>
			<div data-tina-field={tinaField(review, "body")}>
				<TinaMarkdown content={review.body} />
			</div>
			{review.trailer && (
				<div id="trailer" data-tina-field={tinaField(review, "trailer")}>
					<h2 style={{ textAlign: "center", marginTop: "80px" }}>Bekijk hier de trailer:</h2>
					<div className="video-container">
						<div className="video-wrapper">
							<iframe 
								src={`https://www.youtube-nocookie.com/embed/${review.trailer}`}
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
