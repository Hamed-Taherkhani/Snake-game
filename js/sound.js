const audio = new Audio();

audio.src = "https://s3.ir-thr-at1.arvanstorage.com/soundsnap/189437_bite-food-apple-food-eat-crunch-rip-tear-blastwavefx-03974_iq906yu4_watermark?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=a9c0fa52-1a26-4b10-ac1f-49b0d2e5622b%2F20211116%2F%2Fs3%2Faws4_request&X-Amz-Date=20211116T192634Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=46b821b732a3b9c5898ce98b2f47f804ad0385b55e04ac50377e28a0b750dbf2";

export function playEatingAppleSound() {
    audio.play();
}