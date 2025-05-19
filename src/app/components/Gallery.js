import Image from "next/image"

export default function Gallery() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/nm6.jpg" alt="" />
                </div>
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/gs2.jpg" alt="" />
                </div>
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/gs3.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                        <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/gs1.jpg" alt="" />
                    </div>
                    <div>
                        <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/gs4.jpg" alt="" />
                    </div>
                    <div>
                        <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/nm1.jpg" alt="" />
                    </div>
                </div>
            <div className="grid gap-4">
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/nm2.jpg" alt="" />
                </div>
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/nm3.jpg" alt="" />
                </div>
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/nm4.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4 content-start">
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/nm5.jpg" alt="" />
                </div>
                <div>
                    <Image width={0} height={0} sizes="100vw" className="w-[100%] h-auto rounded-lg" src="/images/gs5.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}