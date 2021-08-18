import React from 'react';
import './LocationCard.css';

const LocationCard = (props: any) => {
    const { id, name, type, dimension, residents, created } = props.location;

    return (
        <section className="col-xl-3 col-lg-4 col-sm-6">
            <div className="card location" style={{ width: '100%' }}>
                <div className="card-body">
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Name: </strong>{name}</p>
                    {
                        type && <p><strong>Type:</strong> {type}</p>
                    }
                    <p><strong>Dimension:</strong> {dimension}</p>
                    <p><strong>Residents: </strong></p>
                    {
                        residents.map((resident: any, index: number) => <span key={index}>{resident.name}, </span>)
                    }
                    <br /><br />
                    <p><strong>Created:</strong> {created}</p>
                </div>
            </div>
        </section>
    );
};

export default LocationCard;