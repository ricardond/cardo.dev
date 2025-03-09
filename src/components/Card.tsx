import React from 'react';

interface CardProps {
    title: string;
    imageUrl: string;
}

export default function Card({ title, imageUrl }: CardProps) {
    return (
        <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg">
            <img src={imageUrl || 'https://placehold.co/150'} alt={title} className="w-12 h-12 object-contain" />
            <h3 className="ml-4 text-white font-bold text-lg">{title}</h3>
        </div>
    );
}