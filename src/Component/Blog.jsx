import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className=" w-1/2 mx-auto">
                <h1 className='text-center mb-3'>Compare SQL and NoSQL databases</h1>
                <table className='w-full'>
                    <tr className='border'>
                        <th className='border'>SQL</th>
                        <th className='border'>NoSql</th>

                    </tr>
                    <tr className='border'>
                        <td className='border'>Stands for Structured Query Language	</td>
                        <td className='border'>Stands for Not Only SQL</td>

                    </tr>
                    <tr className='border'>
                        <td className='border'>Suitable for structured data with predefined schema	</td>
                        <td className='border'>Non-relational database management system</td>

                    </tr>
                    <tr>
                        <td className='border'>Suitable for structured data with predefined schema	</td>
                        <td className='border'>Suitable for unstructured and semi-structured data</td>
                    </tr>
                    <tr>
                        <td className='border'>Data is stored in tables with columns and rows</td>
                        <td className='border'>Data is stored in collections or documents</td>
                    </tr>
                    <tr>
                        <td className='border'>Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management	</td>
                        <td className='border'>Does not necessarily follow ACID properties</td>
                    </tr>
                </table>

            </div>
            <div className="text-center mt-10 mb-10 w-1/2 mx-auto">
                <h1>What is express js? What is Nest JS?</h1>
                <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div className="text-center mt-10 mb-10 w-1/2 mx-auto">
                <h1>What is MongoDB aggregate and how does it work?</h1>
                <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
            <div className="text-center w-1/2 mx-auto">
                <h1>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>An access token is a credential that grants access to protected resources or APIs. It is typically short-lived and is used to authenticate and authorize requests made by a client. The access token contains information about the user and their permissions. <br />
                    A refresh token, on the other hand, is a long-lived credential that is used to obtain a new access token when the current one expires. It is usually securely stored by the client and exchanged for a new access token with the authorization server. Refresh tokens are often used to implement long-lived sessions and improve security by reducing the exposure of access tokens.</p>
            </div>
        </div>
    );
};

export default Blog;