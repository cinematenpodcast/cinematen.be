import React from 'react';
import { tinaField, useTina } from "tinacms/dist/react";
import type { ReviewsQuery, ReviewsQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { YouTube } from 'astro-embed';

type Props = {
	variables: ReviewsQueryVariables;
	data: ReviewsQuery;
	query: string;
}

// Custom components for TinaMarkdown
const components = {
	YouTube: (props: { id: string }) => {
		// Extract video ID from URL or use as-is
		let videoId = props.id;
		if (props.id.includes('youtube.com') || props.id.includes('youtu.be')) {
			const match = props.id.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
			videoId = match ? match[1] : props.id;
		}
		return (
			<div style={{ margin: '20px 0', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${videoId}`}
					style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>
		);
	},
	EmptySpaceS: () => <div style={{ height: '20px' }} />,
	EmptySpaceM: () => <div style={{ height: '40px' }} />,
	EmptySpaceL: () => <div style={{ height: '60px' }} />,
};

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
				<TinaMarkdown content={review.body} components={components} />
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
