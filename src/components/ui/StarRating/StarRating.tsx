import React, { useState, useEffect } from 'react';

import { starRatingData } from 'context/db';

import { IratingStar } from 'types/generalTypes';

import './star-rating.scss';

// /. imports

interface propTypes {
    rating: number;
}

// /. interfaces

const StarRating: React.FC<propTypes> = ({ rating }) => {
    const [ratingData, setRatingData] = useState(starRatingData);

    // /. hooks

    useEffect(() => {
        const pointsInOneRating = 100000;
        const ratingFromPoints = Math.floor(rating / pointsInOneRating);

        const newRatingData = ratingData.map(
            (star: IratingStar, idx: number) => {
                if (idx < ratingFromPoints) {
                    return {
                        ...star,
                        isFilled: true
                    };
                } else {
                    return star;
                }
            }
        );
        setRatingData(newRatingData);
    }, [rating]);

    // /. effects

    return (
        <ul className="star-rating">
            {ratingData.map((star: IratingStar) => {
                return (
                    <li
                        className={`star-rating__template ${
                            star.isFilled ? 'filled' : ''
                        }`}
                        data-rating={rating}
                        key={star.id}
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z"
                                fill=""
                            />
                            <path
                                d="M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z"
                                fill="white"
                                fillOpacity=""
                            />
                        </svg>
                    </li>
                );
            })}
        </ul>
    );
};

export default StarRating;
