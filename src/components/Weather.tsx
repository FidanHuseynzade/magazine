import React, { useState } from 'react';
import { Input, Button, Card, Row, Col } from 'antd';
import axios from 'axios';

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
}

const Weather: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async () => {
        const response = await axios.get<WeatherData>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75e78972a2df50797a3b365790df65a9`
        );
        setWeatherData(response.data);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    return (
        <>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-weather-296-1100758.png" alt="" style={{width:'30px'}}/>
            <Input
                placeholder="Enter city name"
                style={{ width: '300px', marginRight: '10px' }}
                value={city}
                onChange={handleInputChange}
            />
            <Button type="primary" onClick={fetchWeatherData}>
                Find
            </Button>
            {weatherData && (
                <Card title={weatherData.name} style={{ marginTop: '15px' }}>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <p>Temperature: {weatherData.main.temp}°F</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                        </Col>
                    </Row>
                </Card>
            )}
        </>
    );
};

export default Weather;
