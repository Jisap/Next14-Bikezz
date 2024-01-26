import Link from "next/link"
import { Input } from "./ui/input"
import { RiYoutubeFill, RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitterFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="capitalize leading-tight mb-2">
                Subscribe to our newsletter
              </h2>
              <p className="text-white/60">
                Be the first to get the latest news about trends, promotions and much more!.
              </p>
            </div>
            {/* form */}
          </div>
        </div>
        {/* copyright */}
        <div className="py-6 border-t border-white/5 text-white/60">
          Copyright &copy; 2014 Bikezz. All rights reserved.
        </div>
      
    </footer>
  )
}

export default Footer