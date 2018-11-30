import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoItems = props.videos.map(video => {
		return <VideoListItem
							key={video.etag}
							video={video}
							onVideoSelect={props.onVideoSelect}/> //continues to send through the function which will change video selected state
	})

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;
