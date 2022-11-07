import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutPhotosInput } from './house-create-without-photos.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutPhotosInput } from './house-create-or-connect-without-photos.input';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseCreateNestedManyWithoutPhotosInput {

    @Field(() => [HouseCreateWithoutPhotosInput], {nullable:true})
    @Type(() => HouseCreateWithoutPhotosInput)
    create?: Array<HouseCreateWithoutPhotosInput>;

    @Field(() => [HouseCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutPhotosInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<HouseWhereUniqueInput>;
}
