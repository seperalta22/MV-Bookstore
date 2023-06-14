/* eslint-disable */
import PropTypes from 'prop-types';
import '../App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ progress }) => (
	<div style={{ width: '80px' }}>
		<CircularProgressbar
			value={progress}
			styles={{
				path: {
					stroke: ' linear-gradient(to bottom, #307bbe, #379cf6);',
				},
				trail: {
					stroke: '#ecedf0',
				},
			}}
		/>
	</div>
);

ProgressCircle.propTypes = {
	progress: PropTypes.number.isRequired,
};

export default ProgressCircle;
