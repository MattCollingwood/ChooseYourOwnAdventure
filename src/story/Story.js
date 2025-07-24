import { useSelector } from 'react-redux';
import './Story.css';
import { useNavigate, Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { selectPlayerName, selectFriendName } from '../store/storySlice';

function renderStoryContent(content, playerName, friendName) {
    return content
        .replaceAll('{{playerName}}', playerName || 'you')
        .replaceAll('{{friendName}}', friendName || 'your friend');
}


function Story() {
    const playerName = useSelector(selectPlayerName);
    const friendName = useSelector(selectFriendName);
    const currentPage = useSelector((state) => state.story.currentPage);
    const storyPages = useSelector((state) => state.story.pages);
    const navigate = useNavigate();
    const { pageId } = useParams();
    const page = storyPages.find((p) => p.id.toString() === pageId);

    const [showImage, setShowImage] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [nextPage, setNextPage] = useState(null);

    const getPageByRoute = (route) => storyPages.find(p => p.id.toString() === route);

    const handlePageFlip = (route) => {
        if (isFlipping) return; 
        const targetPage = getPageByRoute(route);
        if (!targetPage) return;

        setShowImage(false);
        setNextPage(targetPage);
        setIsFlipping(true);
     
        setTimeout(() => {
            setIsFlipping(false);
            navigate(`/${route}`);
        }, 800); 
    };

    useEffect(() => {
        setShowImage(false);
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, [pageId]);

    if (!page) {
        return <div>Page not found</div>;
    }

    

    return (
        <div className="story">
            <div className='page-center'>
                <div className="page-display">
                    <div className="story-content">
                        <div className={`page-flip-wrapper ${isFlipping ? 'flipped' : ''}`}>
                            <div className='page-left'>
                                <div className='story-image'>
                                    {showImage && page.image && <img src={page.image} alt={page.title} className={showImage ? 'loaded' : ''} />}
                                </div>
                            </div>
                            <div className='page-right'>
                                <div className='page-front'>
                                    <h1>{page.title}</h1>
                                    <p>{renderStoryContent(page.content, playerName, friendName)}</p>
                                    <div className="navigation">
                                        {page.nextPage.map((option) => (
                                        <Link key={option.route} to={`/${option.route}`} onClick={()=> handlePageFlip(option.route)} className="option-buttons ">
                                            {option.label}
                                        </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {nextPage && (
                            <div className="page-back">
                                <h1>{nextPage.title}</h1>
                                <p>{nextPage.content}</p>
                            </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;
