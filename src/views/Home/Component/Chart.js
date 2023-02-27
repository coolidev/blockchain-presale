import { useEffect, useState } from "react";

const getAnglePoint = (startAngle, endAngle, radius, x, y) => {
	let x1, y1, x2, y2;

	x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
	y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
	x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
	y2 = y + radius * Math.sin(Math.PI * endAngle / 180);
	return { x1, y1, x2, y2 };
}

const Pie = ({ isDark, data, labels, hole, radius, strokeWidth }) => {
	const diameter = radius * 2;
	const dataCount = data.length;

	let sum, startAngle, d = null;

  const makeid = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const textColor = isDark ? "#FFFFFF" : "#142019";
	const stroke = isDark ? "rgba(245, 247, 250, 0.06)" : "#fafbfc";
  
	const ids = [];
	for (let i = 0; i < dataCount; i++) {
		ids.push(makeid(12));
	}
	const fids = [];
	for (let i = 0; i < dataCount; i++) {
		fids.push(makeid(12));
	}

	sum = data.reduce((carry, current) => {
		return carry + current.value
	}, 0);
	startAngle = -125;

  return (
		<svg
			width={ diameter }
			height={ diameter }
			viewBox={ `0 0 ${ diameter } ${ diameter }`}
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			style={{
				overflow: "unset"
			}}
		>
			<defs>
				{ids.map((_id, _index) => {
					if (!data[_index].active) {
            return <linearGradient id={_id} key={_index} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5f7fa1f" />
              <stop offset="54%" stopColor="#f5f7fa0f" />
              <stop offset="100%" stopColor="#f5f7fa00" />
            </linearGradient>
					}
					return (<linearGradient id={_id} key={_index} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#00ffaa" />
						<stop offset="54%" stopColor="#4579f5" />
						<stop offset="100%" stopColor="#9c42f5" />
					</linearGradient>)
				})}
			</defs>
			{fids.map((_fid, _index) => {
				return (<filter id={_fid} key={_index}>
          <feDropShadow dx="2" dy="2" stdDeviation="24" flood-color="rgba(9, 13, 20, 0.4)" opacity="0.4"/>
          <feDropShadow dx="-1" dy="-1" stdDeviation="8" flood-color="rgba(224, 224, 255, 0.04)" opacity="0.04"/>
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="rgba(9, 13, 20, 0.4)" opacity="0.4"/>
				</filter>)
			})}
			{data.map((slice, sliceIndex) => {
				let angle, nextAngle, percent;
				nextAngle = startAngle;
				angle = (slice.value / sum) * 360;
				percent = (slice.value / sum) * 100;
				startAngle += angle;

				return <Slice
					key={ sliceIndex }
					content={ slice.content }
					value={ slice.value }
					percent={ percent }
					percentValue={ percent.toFixed(1)}
					startAngle={ nextAngle }
					angle={ angle }
					radius={ radius }
					hole={ radius - hole }
					trueHole={ hole }
					showLabel={ labels }
					filter={ fids[sliceIndex] }
					fill={ ids[sliceIndex] }
					stroke={ stroke }
					strokeWidth={ strokeWidth }
          textColor={ !slice.active ? textColor : "#fff" }
				/>
			})}
		</svg>
	)
}

export const Slice = (props) => {
	const [path, setPath] = useState('');
	const [posX, setPosX] = useState(0);
	const [posY, setPosY] = useState(0);

	const draw = (s) => {
		let p = props;
		let dpath = [];

		const step = p.angle / (37.5 / 2);

		if (s + step > p.angle) {
			s = p.angle;
		}

		// Get angle points
		const a = getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
		const b = getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);

		dpath.push('M' + a.x1 + ',' + a.y1);
		dpath.push('A' + p.radius + ',' + p.radius + ' 0 ' + (s > 180 ? 1 : 0) + ',1 ' + a.x2 + ',' + a.y2);
		dpath.push('L' + b.x2 + ',' + b.y2);
		dpath.push('A' + (p.radius - p.hole) + ',' + (p.radius - p.hole) + ' 0 ' + (s > 180 ? 1 : 0) + ',0 ' + b.x1 + ',' + b.y1);

		// Close
		dpath.push('Z');
		setPath(dpath.join(' '));

		if (s < p.angle) {
			setTimeout(() => {
				draw(s + step)
			}, 16);
		} else if (p.showLabel) {
			const c = getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius * 3 / 4 + p.trueHole / 2), p.radius, p.radius);

			setPosX(c.x2);
			setPosY(c.y2)
		}
	}

	useEffect(() => {
		const animate = () => {
			draw(0);
		}
		animate();
	}, []);

	return (
		<g overflow="hidden">
			<path
				d={ path }
				fill={ `url(#${props.fill})` }
				filter={ `url(#${props.filter})`}
				stroke={ props.stroke }
				strokeWidth={ props.strokeWidth ? props.strokeWidth : 3 }
			/>
			{ props.showLabel ?
				<g><text x={ posX } y={ posY - 10 } fill={ props.textColor } font-weight="bold" textAnchor="middle">
					{ props.content }
				</text>
				<text x={ posX } y={ posY + 10 } fill={ props.textColor } textAnchor="middle" opacity="0.6">
					{ props.percent ? props.percentValue + '%' : props.value }
				</text></g>
				: null
			}
		</g>
	)
}

export default Pie;
