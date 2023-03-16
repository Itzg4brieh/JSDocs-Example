import express from 'express';

const app = express();

/**
 * @module api
 */
/**
 * Index Route
 * 
 * @name reviews
 * @path {GET} /
 */
app.get('/', (req,res) => res.send('Welcome'))
/**
 * Index Route
 * 
 * @path {POST} /
 */
app.post('/users', (req,res) => res.send('Welcome'))

/**
 * Index Route
 * 
 * @name reviews
 * @path {DELETE} /
 */
app.delete('/reviews', (req,res) => res.send('Welcome'))

/**
 * Index Route
 * 
 * @name signin
 * @path {POST} /
 */
app.post('/signin', (req,res) => res.send('Welcome'))
/**
 * Index Route
 * 
 * @name upload
 * @path {PUT} /
 */
app.put('/upload', (req,res) => res.send('Welcome'))