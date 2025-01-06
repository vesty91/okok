import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Navbar from './components/layout/Navbar';
    import HomePage from './components/home/HomePage';
    import Builder from './components/builder/Builder';
    import PrebuiltPage from './components/prebuilt/PrebuiltPage';
    import SupportPage from './components/support/SupportPage';
    import { BuildProvider } from './context/BuildContext';
    import CartPage from './components/cart/CartPage';
    import ComponentCategoryPage from './components/components/ComponentCategoryPage';

    const App = () => {
      return (
        <BrowserRouter>
          <BuildProvider>
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/builder" element={<Builder />} />
                <Route path="/components/:category" element={<ComponentCategoryPage />} />
                <Route path="/prebuilt" element={<PrebuiltPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </div>
          </BuildProvider>
        </BrowserRouter>
      );
    };

    export default App;
